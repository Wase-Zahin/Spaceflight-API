import { createStore } from 'vuex'
import { counter } from './counter'
import { articles } from './articles'
import { blogs } from './blogs'
import { reports } from './reports'

const store = createStore({
    modules: {
        counter,
        articles,    
        blogs,
        reports,
    },
})

export default store