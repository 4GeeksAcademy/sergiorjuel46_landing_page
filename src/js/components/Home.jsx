import React from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";


const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-2">
					<Card title="Card 1" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. " />
					<Card title="Card 2" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam maxime, praesentium debitis accusamus id voluptates iusto." />
					<Card title="Card 3" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam maxime, praesentium debitis accusamus id voluptates iusto. Nihil nostrum magni, doloremque tenetur sunt voluptatem suscipit mollitia dicta asperiores, corporis corrupti?" />
					<Card title="Card 4" text="orem, ipsum dolor sit amet consectetur adipisicing elit." />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
