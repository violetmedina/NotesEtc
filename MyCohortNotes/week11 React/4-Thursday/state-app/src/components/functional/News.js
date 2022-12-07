import React, {useState, useEffect} from 'react'

const News = () => {

    const [articles, setArticles] = useState([])
    const [count, setCount] = useState(0)
    const [filteredText, setFilteredText] = useState("")
    const [filteredArr, setFilteredArr] = useState([])



    //componentDidUpdate
    //componentDidMount

    useEffect( ()=>{

        const newsData = async () => {
            let response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd')
            let data = await response.json();

            //set our state
            setArticles(data.articles)
            setFilteredArr(data.articles)
        }

        newsData()

    }, [])

    // console.log(articles);


    const handleChange = (e) => {
        setFilteredText(e.target.value) //Capti

        let filteredArticles = articles.filter(article =>{
            return article.title.toLowerCase().includes(filteredText.toLowerCase())
        })

        setFilteredArr(filteredArticles)
    }

  return (
    <>

    <input type="text" value={filteredText} onChange={handleChange} />

    <ul>
        {filteredArr.map((article, index) =>{
            return <li key={index}>
                <h2>{article.title}</h2>
                <img src={article.urlToImage} alt="" height="150px" />
                <p>{article.description}</p>
            </li>
        })}
    </ul>
     {/* <h1>{count}</h1>

     <button onClick={()=>setCount(count + 1)}>Increment</button> */}
    </>
  )
}

export default News