import { useState, useCallback } from "react";

// 반복되는 내용을 미리 만들어줌
export default (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return [value, handler];
}