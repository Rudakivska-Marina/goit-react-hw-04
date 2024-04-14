import { useState, useEffect } from 'react'
import getPictureWithValue from './unsplash-api'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import { perPage } from './unsplash-api'
import Loader from './components/Loader/Loader'
import ImageModal from './components/ImageModal/ImageModal'
import toast, { Toaster } from 'react-hot-toast';
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
let totalPages;
import './App.css'

function App() {

  const[elements, setElements] = useState([])
  const[searchValue, setSearchValue] = useState("")
  const[newPage, setNewPage] = useState(1)
  const [loading, setLoading] = useState(false);
  const[modalIsOpen, setModalIsOpen] = useState(false)
  const[currentObject, setCurrentObject] = useState({url: "", alt: ""})
  const[eror, setEror] = useState(false)
 
  

  useEffect(() => {
  async function getPicture(){
    if(searchValue !==''){
    try{
    setLoading(true)
const result = await getPictureWithValue(searchValue, newPage);
setElements([...elements, ...result.data.results])
totalPages = result.data.total_pages
if(totalPages === newPage) toast('No more pages!')
if(totalPages === 0) toast('There are no pictures with that name!');
    }catch (error){
      switch (error.response.status) {
        case 400:
          toast.error('Bad Request');
          break;
        case 401:
          toast.error('Invalid Access Token!');
          break;
        case 403:
          toast.error('Missing permissions to perform request!');
          case 404:
            toast.error('The requested resource doesn’t exist!');
          case 500:
            toast.error('Service problem!');
          break;
        default:
          toast.error('Oops, something wrong..');}
          setEror(true)
    }finally{
     setLoading(false)
    }
}}getPicture()}, [searchValue, newPage])


  function forSearch(value){
    if(value === searchValue && newPage>1){setElements([]);setNewPage(1)} 
    if(searchValue !== "" && value !== searchValue){setElements([]);setNewPage(1)}
setSearchValue(value)
window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function pagination(){
setNewPage(newPage+1)
  }

  function isOpenModal(data){
    setCurrentObject(data)
setModalIsOpen(true)
  }

  function close(){
    setModalIsOpen(false)
  }

  return (
    <div className='mainBox'>
      <div className='navigation'>
    <SearchBar onSubmit={forSearch} setSearchValue={setSearchValue}/>
    </div>

    <ImageGallery images={elements} modalOpen={isOpenModal}/>

    {loading && <Loader/>}
    
{elements.length > 0 && totalPages !== newPage && <LoadMoreBtn onClick={pagination}/>}

<ImageModal isOpen={modalIsOpen} onClose ={close} currentObject={currentObject}/>

{eror && <ErrorMessage/>}

<Toaster toastOptions={{
    className: 'toaster',
  }} containerStyle={{
    top: 300,
  }}
/>
    </div>
  )
}

export default App