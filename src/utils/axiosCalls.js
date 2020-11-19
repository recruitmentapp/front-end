import axios from 'axios'
import { useRecoilState } from 'recoil'
import { jobState, loadingState } from './Atom'


export const fetchJobs = () => {
    const [ jobs, setJobs ] = useRecoilState(jobState)
    const [isLoading, setIsLoading] = useRecoilState(jobState)
    axios.get()
        .then((res) => {
            setJobs(res.data)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
        })
}