import CreatePost from "./CreatePost";
import Post from "./Post";
import classes from "../styles/feed.module.css";

const posts = [
    {
        postId: "p1",
        userName: "ABC XYZ",
        userIntro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        postCreated: "3d ago",
        postCaption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, autem vitae ipsum odit ut repellat obcaecati velit saepe aspernatur dolores ex optio! Natus sit, cumque labore aliquid quae accusamus, dicta a molestias quod fuga dolor laboriosam suscipit? Maiores, ratione ipsam officia dolores aliquam quia odit sint quae dolor cumque, exercitationem recusandae facere deserunt perspiciatis temporibus harum? Accusantium adipisci at, magni, expedita, quis consectetur autem fuga provident saepe libero iusto blanditiis nostrum dicta minima amet incidunt? Quasi quibusdam odit libero maiores ratione sunt explicabo neque? Omnis quam eum, sunt accusantium tempore aliquid commodi incidunt aperiam ducimus totam dolor unde id quasi error laborum obcaecati animi cumque repellat fugiat soluta blanditiis expedita vitae natus. Dicta quas totam aperiam ratione animi, neque facere quisquam amet, suscipit molestiae officiis. Quisquam molestias unde sapiente ipsam, eveniet quam iure ratione quas ea eos dolores magnam corrupti dignissimos? Itaque nulla accusamus ut hic est ipsum inventore quibusdam amet quasi eos, aperiam libero, autem enim ab iusto debitis eaque? Perspiciatis repudiandae accusantium architecto unde mollitia libero in, laudantium assumenda explicabo ex! Quos natus ipsam nulla officia quidem nobis!",
        postImg: "",
        postLikes: "6",
        postComments: "4",
        postShares: "12",
    },
    {
        postId: "p2",
        userName: "XYZ ABC",
        userIntro: "Lorem ipsum dolor sit, amet consectetur.",
        postCreated: "3d ago",
        postCaption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, autem vitae ipsum odit ut repellat obcaecati velit saepe aspernatur dolores ex optio! Natus sit, cumque labore aliquid quae accusamus, dicta a molestias quod fuga dolor laboriosam suscipit? Maiores, ratione ipsam officia dolores aliquam quia odit sint quae dolor cumque, exercitationem recusandae facere deserunt.",
        postImg: "/images/post.jpg",
        postLikes: "6",
        postComments: "4",
        postShares: "2",
    },
    {
        postId: "p3",
        userName: "Phunsukh Wangdu",
        userIntro: "Innovator || Scientist || School Teacher || Starred in 3 idiots",
        postCreated: "13y ago",
        postCaption: "Farhan Qureshi and Raju Rastogi want to re-unite with their fellow collegian, Rancho, after faking a stroke aboard an Air India plane, and excusing himself from his wife - trouser less - respectively. Enroute, they encounter another student, Chatur Ramalingam, now a successful businessman, who reminds them of a bet they had undertaken 10 years ago. The trio, while recollecting hilarious antics, including their run-ins with the Dean of Delhi's Imperial College of Engineering, Viru Sahastrabudhe, race to locate Rancho, at his last known address - little knowing the secret that was kept from them all this time.",
        postImg: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/5/1/original/3_Idiots.PNG",
        postLikes: "2M",
        postComments: "86K",
        postShares: "56K",
    },
];

function Feed() {
    return <div className={`${classes.feed}`}>
        <CreatePost />
        {posts.map(post => {
            return <Post key={post.postId} post={post} />
        })}
    </div>;
}

export default Feed;