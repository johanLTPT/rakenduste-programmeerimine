import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";
import { Table, Spin, Space} from "antd";
function Posts() {
  const [title, setTitle] = useState("");
  const [state, dispatch] = useContext(Context);
  const [loading, setloading] = useState(true);
  const inputRef = useRef(null);
  var dataSource = [];
  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja
  useEffect(()=>{
    getData();
},[])
const getData = async () => {
  await fetch('http://localhost:8081/api/post').then(
    res => {
      return res.json();
    }).then(async (data) => {
      setloading(false);
      dispatch(
        updatePosts(data)
      );
    }
  );
};

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };

  const newPost = state.auth.user ?[{
    title,
    user:state.auth.user.firstName
     //kui sisse logida töötab
  }] :[{
    title,
    user:"anon"
  }];
  const addNewPost = async () => {
    console.log(newPost[0]);
    fetch('http://localhost:8081/api/post/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newPost[0]),
      }).then((data) =>{})
    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(addPost(newPost))
  };

  //console.log({ inputRef });
  
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Delete',
      key: 'id',
      //Väga halb tava niimoodi koodi kirjutada, but hey, it works
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => 
          fetch('http://localhost:8081/api/post/delete/' + record._id, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
          }).then(() =>{dispatch(removePost(record._id))}).then(() =>{getData();})
          
          }>❌</a>
        </Space>
      ),
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>

      {/*{state.posts.data.map((e) => (
        <li key={e.id}>
          {e.id} {e.title}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removePost(e.id))}
          >
            ❌
          </span>
        </li>
      ))}*/}
      <div>
      {loading ? (
        <Spin />
      ) : (
        dataSource = state.posts.data,
        //console.log(state.posts.data),
        <Table dataSource={dataSource} columns={columns} />
      )}
    </div>
      
    </div>
  );
}

export default Posts;
