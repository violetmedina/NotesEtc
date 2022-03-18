//this is just to show how the fetch function works, we will be using that on most things.

const ourFetch = url =>{
    //create a promise

    let promise = new Promise((resolve, reject)=>{
        // make our async ajax call

        let xhr = new XMLHttpRequest(); //creates XHR object
        xhr.open('GET', url)
        xhr.send()

        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4 && xhr.status === 200){
                let data = JSON.parse(xhr.responseText)
                resolve(data)
            }
            else if(xhr.readyState == 4 && xhr.status !== 200){
                reject('error in data')
            }
        }
    })
    return promise
}

window.ourFetch = ourFetch


//fetch(url).then()
//ourFetch(url)
//.then()