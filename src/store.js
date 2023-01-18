import { reactive } from 'vue'

export const store = reactive({
    MovieUrl: "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=",
    SeriesUrl: "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=",
    GenreUrl: "https://api.themoviedb.org/3/genre/movie/list?api_key=cbf0f0875d9b4297f36cceb44d4d7f83&language=it_IT",
    FilmList: [],
    SeriesList: [],
    GenreList: [],
    SelectedGenre: ''
})