import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    Person: {
      fullName: "Rakia Chawali",
      bio: "A slight clarification of the above: I’m actually a philosophy student cleverly disguised as a successful web developer. Since it was relatively clear early on that it would be slightly more than difficult to make a living sitting under a tree while reading Kant, I’ve focused my energies on the web, which happily has proven itself to be a wonderful decision.",
      imgSrc:
        "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/277803220_3093951890843036_6991948423968330334_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=vHRA9QapE2AAX-fZieC&tn=AT2qMkd58P7ZMEBN&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC_aIE0uqEw-JKEZ67EvZtdftzYXRa13nv5remv_TyYhg&oe=639E4B79",
      profession: "Develloping Web",
    },
    show: true,
    timer: 0,
  };

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }
  render() {
    return (
      <div>
        {this.state.show && (
          <>
            <h1 style={{ color: "white" }}>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.bio}</h2>
            <img
              src={this.state.Person.imgSrc}
              alt="pic"
              style={{ width: "30%", borderRadius: "80%" }}
            ></img>
            <h2>{this.state.Person.profession}</h2>

            <h2> {this.state.timer}</h2>
            <br></br>
          </>
        )}
      </div>
    );
  }
}
