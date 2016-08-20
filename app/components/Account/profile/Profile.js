import React from 'react';
import { connect } from 'react-redux'
import { updateProfile, changePassword, deleteAccount } from '../../../actions/auth';
import { link, unlink } from '../../../actions/oauth';
import Messages from '../../Messages';
import Bio from './Bio';
import Tab from './Tab';
import Image from './Image';
import Goal from './Goal';
import _ from 'lodash';
import UploadButton from '../../UploadButton';
import Diet from '../../Regime/Diet/Diet';
import Supplements from '../../Supplement/SupplementView';
import Exercise from '../../Regime/Exercise/Exercise';
import RegimeDiet from '../../Regime/Diet/RegimeDiet';
import Timeline from '../../Timeline/Main';
import AddFriendButton from '../../AddFriendButton';

class ReadOnlyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user || {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user
    });
  }

  render() {
    const goalList = _.map(this.state.user.goals, (goal, index) => {
      return (<Goal key={index} {...goal} />);
    });

    const followerButton = (this.state.user.name === undefined || this.state.user.id === this.props.loggedInUser.id) 
      ? (<AddFriendButton {...this.state} />)
      : (<AddFriendButton {...this.state} />);

    const bio = this.state.user.name
      ? (<Bio {...this.state.user} />)
      : (<Image src='../../assets/loading-more.gif' />);

    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Messages messages={this.props.messages}/>
        </div>
      </div>
      <div className="row bio-row">
        <div className="col-md-10">
          {bio}
          <br />
        </div>
      </div>
      <div className="row profile-contents-row">
        <div className="col-md-10">
          <div className="col-md-2 goals-regime-supplements-div">
            <div className="card">
              <div>
                <span className="glyphicon glyphicon-road" aria-hidden="true"></span>
                <span> Goals </span>
                <hr />
              </div>
              <div className="card-content">
                {goalList}
              </div>
            </div>

            <div className="card">
              <div>
                <span className="glyphicon glyphicon-road" aria-hidden="true"></span>
                <span> Diet </span>
                <hr />
              </div>
              <div className="card-content">
                <Diet />
              </div>
            </div>

            <div className="card">
              <div>
                <span className="glyphicon glyphicon-road" aria-hidden="true"></span>
                <span> Exercise </span>
                <hr />
              </div>
              <div className="card-content">
                <Exercise />
              </div>
            </div>

            <div className="card">
              <div>
                <span className="glyphicon glyphicon-road" aria-hidden="true"></span>
                <span> Supplement </span>
                <hr />
              </div>
              <div className="card-content">
                <Supplements />
              </div>
            </div>
          </div>
          <div className="col-md-10 feed-and-timeline-div">
            <div className="profile-follow-div">{followerButton}</div>
            <ul className="nav nav-tabs">
              <li className="active"><a href="#feed" data-toggle="tab">Feed</a></li>
              <li><a href="#timeline" data-toggle="tab">Timeline</a></li>
            </ul>
            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade active in" id="feed">
                Feeel the feeeeeds
              </div>
              <div className="tab-pane fade" id="timeline">
                <Timeline user={this.state.user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.profile.user,
    messages: state.messages,
    loggedInUser: state.auth.user
  };
};

export default connect(mapStateToProps)(ReadOnlyProfile);
