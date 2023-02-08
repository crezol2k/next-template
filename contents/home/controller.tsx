import { useState } from "react";

export function useHomeControler(){
    const [post, setPost] = useState([])

    const onClickPost = (postId: number)=> {

    }

    return {
        post,
        onClickPost
    }

}