import React from 'react';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';

// const MEETUPS = [
//     {
//         id: 'm1',
//         title: 'Our First meet!',
//         image: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//         address: 'Our FAV spot!',
//         description: 'When I fell for her!'
//     },
//     {
//         id: 'm2',
//         title: 'When I saw her face!',
//         image: 'https://images.unsplash.com/photo-1496433998859-da21e208bd42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//         address: 'Hills',
//         description: 'When I fell for her!'
//     },
//     {
//         id: 'm3',
//         title: 'When universe collides!',
//         image: 'https://images.unsplash.com/photo-1542311222-5632cf0e6c51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
//         address: 'Beach',
//         description: 'When I fell for her!'
//     }, {
//         id: 'm4',
//         title: 'We grew old together!',
//         image: 'https://images.unsplash.com/photo-1616362258595-28a25ece05f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//         address: 'Cafe',
//         description: 'When I fell for her!'
//     },
// ];

const HomePage = (props) => {
    //-----------does two times rendering!----------------
    // const [meetups, setMeetups] = useState([]);
    // useEffect(() => {
    //     //fetch data
    //     setMeetups();
    // }, []);
    //----------------------------------------------------

    return (
        <>
            <Head>
                <title>Mulakat</title>
                <meta
                    name="description"
                    content="Every season is the season of love, so drown in the rain of love with your partner and post anonymous meets here that you experience again when you are old!" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
}

//SSG -> static site generation and incremental ssg
export async function getStaticProps() {
    //fetch data from database
    //fetch('/api/meetups'); but it is not exposed so,
    const client = MongoClient.connect('mongodb+srv://new_user:quAXv4Ayja4tQkkb@cluster0.7u7y9.mongodb.net/mulakat?retryWrites=true&w=majority');

    const db = (await client).db();

    const meetupsCollection = db.collection('mulakat');

    const meetups = await meetupsCollection.find().toArray();

    (await client).close();

    return {
        props: {
            meetups: meetups.map(m => ({
                title: m.title,
                address: m.address,
                image: m.image,
                id: m._id.toString()
            }))
        },
        revalidate: 1
    }
}

//server side generation -> runs for every incoming req..
// export async function getServerSideProps(context) {
//     //fetch data from database
//     const req = context.req; if you want these access ---similar to nodejs req,res---
//     const res = context.res;
//     return {
//         props: MEETUPS
//     }
// }

export default HomePage;
