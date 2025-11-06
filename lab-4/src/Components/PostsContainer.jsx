import PostCard from "./PostCard";

export default function PostsContainer({ data }) {
    return (
        <div>
            {data.map((post) => (
                <PostCard {...post} key={post.id} />
            ))}
        </div>
    );
}
