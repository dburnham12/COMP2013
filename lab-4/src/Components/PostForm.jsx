export default function PostForm({ newPost, handleOnChange, handleAddPost }) {
    return (
        <form action="" className="post-form">
            <h2>Post Form</h2>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" onChange={handleOnChange} value={newPost.title} />
            <br />
            <label htmlFor="body">Body:</label>
            <input type="text" name="body" id="body" onChange={handleOnChange} value={newPost.body} />
            <br />
            <button onClick={handleAddPost}>Submit</button>
        </form>
    );
}
