import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post"

class BlogPost extends Component{
    state = {                   // komponen state dari Reeact untuk statefull componen
        listArtikel:[],          // variabel array yang digunakan untukk menyimpan data API
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }


    componentDidMount() {       //komponen untuk mengecek ketika component telah di mount-ing, maka panggil API
        fetch('https://jsonplaceholder.typicode.com/posts') //alamat URL API yang ingin kita ambil datanya
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }
    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch('http://localhost:3001/posts/${data}', {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name]= event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => { 
        fetch('http://localhost:3001/posts', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            })
    }

    render(){
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" onChange={this.handleHapusArtikel}/>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label> 
                </div>

                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;