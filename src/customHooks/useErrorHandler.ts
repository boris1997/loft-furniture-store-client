import { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';

export const useHttpErrorHandler = (httpClient: any) => {
    const [error, setError] = useState(null);
    // let error = null

    // const reqInterceptor = httpClient.interceptors.request.use((req: any) => {
    //     
    //     // setError(null);
    //     // error = null;
    //     return req;
    // });
    const resInterceptor = httpClient.interceptors.response.use(
        (res: AxiosRequestConfig | Promise<AxiosRequestConfig>) => {

            // error = res
            return res
        },
        ({ response }: any) => {
            // setError(response);
            // error = response;
            if (response.status === 404 && response.statusText === 'Not Found') {

                setError(response)
            }


            return response
        }
    );

    useEffect(() => {

        return () => {

            // httpClient.interceptors.request.eject(reqInterceptor);
            httpClient.interceptors.response.eject(resInterceptor);
        };
    }, [resInterceptor]);

    const errorConfirmedHandler = () => {
        // setError(null);
        // error = null;

    };

    return [error, setError]
}