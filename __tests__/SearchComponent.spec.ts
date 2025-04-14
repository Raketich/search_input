import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import SearchComponent from '../src/components/SearchComponent.vue'
import { useNames } from '../src/composables/useNames'

// Mock the useNames composable
vi.mock('../src/composables/useNames', () => ({
  useNames: () => ({
    getFilteredNames: {
      value: vi.fn((searchTerm) => {
        const mockNames = ['Alice', 'Alexander', 'Alina']
        return mockNames.filter((name) => name.toLowerCase().startsWith(searchTerm.toLowerCase()))
      }),
    },
  }),
}))

describe('SearchComponent', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(SearchComponent)
  })

  it('renders properly', () => {
    expect(wrapper.find('.search-container').exists()).toBe(true)
    expect(wrapper.find('input.search-input').exists()).toBe(true)
  })

  it('does not show dropdown initially', () => {
    expect(wrapper.find('.dropdown').exists()).toBe(false)
  })

  it('does not show clear button when input is empty', () => {
    expect(wrapper.find('.clear-button').exists()).toBe(false)
  })

  it('shows clear button when input has text', async () => {
    const input = wrapper.find('input.search-input')
    await input.setValue('A')
    expect(wrapper.find('.clear-button').exists()).toBe(true)
  })

  it('clears input when clear button is clicked', async () => {
    const input = wrapper.find('input.search-input')
    await input.setValue('Alice')
    await wrapper.find('.clear-button').trigger('click')
    expect((input.element as HTMLInputElement).value).toBe('')
  })

  it('shows dropdown with filtered results when typing', async () => {
    const input = wrapper.find('input.search-input')
    await input.setValue('A')
    // Wait for debounce
    await new Promise((resolve) => setTimeout(resolve, 350))
    await flushPromises()

    expect(wrapper.find('.dropdown').exists()).toBe(true)
    const suggestions = wrapper.findAll('.suggestion-item')
    expect(suggestions.length).toBe(3) // Alice, Alexander, Alina
  })

  it('selects item when clicked', async () => {
    const input = wrapper.find('input.search-input')
    await input.setValue('A')
    await new Promise((resolve) => setTimeout(resolve, 350))
    await flushPromises()

    await wrapper.findAll('.suggestion-item')[0].trigger('click')
    expect((input.element as HTMLInputElement).value).toBe('Alice')
    expect(wrapper.find('.dropdown').exists()).toBe(false)
  })

  it('navigates dropdown with keyboard arrows', async () => {
    const input = wrapper.find('input.search-input')
    await input.setValue('A')
    await new Promise((resolve) => setTimeout(resolve, 350))
    await flushPromises()

    await input.trigger('keydown', { key: 'ArrowDown' })
    let items = wrapper.findAll('.suggestion-item')
    expect(items[0].classes()).toContain('active')

    await input.trigger('keydown', { key: 'ArrowDown' })
    items = wrapper.findAll('.suggestion-item')
    expect(items[1].classes()).toContain('active')

    await input.trigger('keydown', { key: 'ArrowUp' })
    items = wrapper.findAll('.suggestion-item')
    expect(items[0].classes()).toContain('active')
  })

  it('selects item with Enter key', async () => {
    const input = wrapper.find('input.search-input')
    await input.setValue('A')
    await new Promise((resolve) => setTimeout(resolve, 350))
    await flushPromises()

    await input.trigger('keydown', { key: 'ArrowDown' })
    await input.trigger('keydown', { key: 'Enter' })

    expect((input.element as HTMLInputElement).value).toBe('Alice')
    expect(wrapper.find('.dropdown').exists()).toBe(false)
  })

  it('closes dropdown with Escape key', async () => {
    const input = wrapper.find('input.search-input')
    await input.setValue('A')
    await new Promise((resolve) => setTimeout(resolve, 350))
    await flushPromises()

    expect(wrapper.find('.dropdown').exists()).toBe(true)
    await input.trigger('keydown', { key: 'Escape' })
    expect(wrapper.find('.dropdown').exists()).toBe(false)
  })

  it('shows no results message when no matches found', async () => {
    const input = wrapper.find('input.search-input')
    await input.setValue('XYZ')
    await new Promise((resolve) => setTimeout(resolve, 350))
    await flushPromises()

    expect(wrapper.find('.dropdown').exists()).toBe(true)
    expect(wrapper.find('.no-results').exists()).toBe(true)
    expect(wrapper.find('.no-results').text()).toBe('No results found')
  })
})
