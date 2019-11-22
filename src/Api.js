import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const updateSeries = (series) => api.put('series/'+series.id, series)
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)
export const loadSeriesById = (id) => api.get('series/'+id)
export const deleteSeries = (id) => api.delete('series/'+id)

const apis = {
    loadGenres,
    saveSeries,
    loadSeriesByGenre,
    deleteSeries,
    loadSeriesById,
    updateSeries
}

export default apis