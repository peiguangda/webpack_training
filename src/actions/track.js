import axios from 'axios';
import {SUCCESS} from "../core/constants";

const apiUrl = 'http://api.a3rt.recruit-tech.co.jp/proofreading/v2/typo';

export const fetchData = () => {
    return (dispatch) => {
        return axios({
            method: 'GET',
            url: apiUrl,
            params: {
                apikey: 'DZZXu1OYW2WcJtx70ISUg01lim58YdxF',
                sentence: "日本語教育で使われている「みんなの日本語」の教案を公開します。このページには「みんなの日本語」の各課で習う文型が、その文型を選択すると各課の教案が見られます。みんなの日本語の教案作りに苦労されている日本語教師の方は",
            }
        })
            .then(response => {
                dispatch(newData(response));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export function newData(response) {
    return {
        type: SUCCESS,
        data: response.data
    }
}