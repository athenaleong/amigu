import React, {useState} from 'react'

function useLoading(props) {
    const [isLoading, setIsLoading] = useState(true);

    const showLoading = () => {
        setIsLoading(true);
    }
    
    const hideLoading = () => {
        setIsLoading(false);
    }

    return [isLoading, showLoading, hideLoading]
}

export default useLoading