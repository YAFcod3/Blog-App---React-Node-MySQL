import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <>
      <div className="single">
        {/*content */}
        <div className="content">
          <img
            src="https://images.pexels.com/photos/7356598/pexels-photo-7356598.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="imageContent"
          />

          <div className="user">
            <img
              src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="userImage"
            />
            <div className="info">
              <span>John</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={`/write?edit=2`}>
                {" "}
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          </div>
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur, quasi accusamus recusandae harum placeat officiis
            cupiditate.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            nemo blanditiis veritatis, architecto fuga soluta ullam minima
            reiciendis molestiae rerum cumque repudiandae autem eos, et nisi
            doloribus maiores sint impedit. Perspiciatis, nam tenetur.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            ipsum, eveniet magnam quis tempora cumque? Id quasi maxime
            voluptatum suscipit sunt ad culpa laudantium corporis? Fugiat
            nesciunt at temporibus aspernatur voluptate eius aut tenetur quas
            commodi, nihil eligendi laborum rem quidem officia, facilis
            recusandae!
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus nihil alias eligendi ratione voluptatibus assumenda,
            magni molestias, enim sint eius fuga ea quod recusandae est.
            Voluptatum corrupti eos beatae modi repellat deserunt animi
            obcaecati optio provident! Et, cumque! Fugiat veniam vel placeat
            obcaecati, dignissimos, at modi nesciunt est in culpa exercitationem
            voluptatem impedit optio ex.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            ipsa laborum, pariatur ex minima similique labore voluptatem cumque
            tenetur? Voluptate, sunt rem eaque enim necessitatibus dignissimos
            beatae eum perferendis quo modi commodi dolor, veritatis sequi
            sapiente. Velit numquam corporis, cumque, sequi consequuntur
            voluptate eveniet amet natus ducimus atque minus. Voluptates impedit
            optio, sequi vero facilis voluptatum reprehenderit illo doloremque!
            Dignissimos voluptatibus eos, labore reiciendis velit ut ducimus
            corrupti neque, nobis itaque qui quasi dolor. Blanditiis est
            consequuntur vero asperiores non architecto expedita quasi molestiae
            nobis. Consequatur facilis in dolores libero aliquid a omnis, ab
            fugiat est alias? Ipsam sed ipsa similique, soluta corporis saepe
            dignissimos nam reiciendis accusamus consequuntur minus in.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            vitae harum veniam ullam, distinctio doloribus, porro atque totam
            cupiditate eligendi officia a dolore nostrum hic cum, recusandae
            sapiente tempore adipisci velit aperiam ut. Fugit fugiat alias,
            beatae maiores dicta saepe ipsam eveniet officiis laboriosam aperiam
            natus quaerat? Unde iusto, corrupti voluptas architecto sit ipsum
            nostrum repellendus velit eveniet iste ab nihil porro aperiam modi,
            deserunt ratione quia assumenda aut ullam libero doloribus eius?
            Mollitia nam, repellendus commodi necessitatibus, perspiciatis
            inventore nulla ipsam dolor harum fugiat cum quibusdam facilis rem
            recusandae aut? Non odio nihil explicabo est, voluptatum eum aperiam
            sed?
          </p>

        </div>

        {/*menu */}
      <Menu/>
      </div>
    </>
  );
};

export default Single;
