import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpeg'

class App extends Component {
    state={displayBio: false};

    // constructor(){
    //     super();
    //     this.state={displayBio: false};
    //     this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
    // }

  toggleDisplayBio=()=>{
      this.setState({displayBio: !this.state.displayBio})
  }
render(){
    return(
        <div>
            <img src={profile} alt='profile' className="profile"/>
            <h1>
                Hello
            </h1>
            <p>
                My name is Hasan.I am a Web devoloper.
            </p>
            <p>
                I am always loooking for meaningful projects.
            </p>
          {
               this.state.displayBio ? (<div>
                <p>
                    I live in New jersey  and I code every day.
                </p>
                <p>
                    My favorite language is Js, and I think React.js is awesome.
                </p>
                <p>
                    Besides codeing, I also love music.
                </p>
                <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>) : (
                <div>
                    <button onClick={this.toggleDisplayBio}>Read More</button>
                </div>
            )

          }
          <hr/>
          <Projects></Projects>
          <hr/>
          <SocialProfiles></SocialProfiles>
        </div>
    ) 
}

}
export default App;