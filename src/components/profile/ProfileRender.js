import React, { useContext, useEffect, useState } from "react"
import { ProfileContext } from "./ProfileProvider"
import { FollowerCard } from "./FollowerCard"
import { LeaderCard } from "./LeaderCard"
import { RequestCard } from "./RequestCard"
import { DanceContext } from "../dance/DanceProvider"
import { DanceCard } from "../dance/DanceCard"
import { AvailabilityContext } from "../availability/AvailabilityProvider"
import { MyAvailabilityCard } from "../availability/MyAvailabilityCard"

export const ProfileRender = () => {

    const { profile, getProfile, updateProfile } = useContext(ProfileContext)

    const { userDances, getUserDances } = useContext(DanceContext)

    const { myAvailability, getMyAvailability } = useContext(AvailabilityContext)

    const [image, setImage] = useState([])
    
    useEffect(() => {
        getProfile()
        getUserDances()
        getMyAvailability()
    }, [])

    useEffect(() => {
        getProfile()
    }, [userDances])
    
    
    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    } 
    
    //handle controlled input change and convert the image to a format that can be sent to server
    const createProfileImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
    
            // Update a component state variable to the value of base64ImageString
            setImage(base64ImageString)
        });
    }


    const handleSubmit = (event) => {
        
        const userId = parseInt(profile?.user.id)

        const data = {
            "bio": profile?.bio,
            "img": image
        }
        
        updateProfile(userId, data)
    }

    return (
        <>
            <article className="profile">
                <header>
                    <h1>Your Profile</h1>
                </header>
                <section className="profile__info">
                    <header className="profile__header">
                        <h3>Your Info</h3>
                    </header>
                    <div className="profile__name">
                        Welcome: {profile.user && profile.user.first_name} {profile.user && profile.user.last_name}
                    </div>
                    <div className="profile__bio">About you: {profile.user && profile.bio}</div>
                    <div className="profile__img">you:
                        <img src={profile.img} alt="profile">
                        </img>
                        <input type="file" id="img" onChange={createProfileImageString} />
                        <input type="hidden" name="img" value={image} />
                        <button onClick={() => {
                            // Upload the stringified image that is stored in state
                            handleSubmit()
                        }}>Upload</button>

                    </div>
                </section>
            </article>
            <article className="dances__info">
                <header className="dances__header">
                    <h3>Your Dances</h3>
                </header>
                <section className="requests__list">
                    {userDances?.map(dance => {
                        return <DanceCard key={dance.dance_type.id} dance={dance} />
                    })}
                </section>
            </article>
            <article className="availability__info">
                <header className="availability__header">
                    <h3>Your Availability</h3>
                </header>
                <section className="availability__list">
                    {myAvailability?.map(window => {
                        return <MyAvailabilityCard key={window.id} window={window} />
                    })}
                </section>
            </article>
            <article className="partners">
                <header>
                    <h1>Your Practice Partners</h1>
                </header>
                <section className="followers__info">
                    <header className="followers__header">
                        <h3>Followers</h3>
                    </header>
                    <div className="followers__list">
                        {profile?.leader?.map(follower => {
                            return <FollowerCard key={follower.id} profileObj={follower} />
                        })}
                    </div>
                </section>
                <section className="leaders__info">
                    <header className="leaders__header">
                        <h3>Leaders</h3>
                    </header>
                    <div className="leaders__list">
                        {profile?.follower?.map(leader => {
                            return <LeaderCard key={leader.id} profileObj={leader} />
                        })}
                    </div>
                </section>
            </article>
            <article className="requests__info">
                <header className="requests__header">
                    <h3>Pending Requests</h3>
                </header>
                <section className="requests__list">
                    {profile?.requests?.map(request => {
                        return <RequestCard key={request.id} request={request} />
                    })}
                </section>
            </article>
        </>
    )
}