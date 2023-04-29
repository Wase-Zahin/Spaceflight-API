import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import type { ArticlesState } from './articles'
import { articles } from './articles'
import { blogs } from './blogs'
import type { BlogsState } from './blogs'
import type { ArticleItemState } from './articleItem'
import { ArticleItem } from './articleItem'
import { BlogsItem } from './blogItem'
import type { BlogsItemState } from './blogItem'

export interface State {
  articles: ArticlesState,
  blogs: BlogsState,
  ArticleItem: ArticleItemState,
  BlogsItem: BlogsItemState,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    articles,
    blogs,
    ArticleItem,
    BlogsItem,
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}