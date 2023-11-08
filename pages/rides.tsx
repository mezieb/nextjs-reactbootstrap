import React from 'react'
import Head from 'next/head'
import SearchRidesForm from '@/components/SearchRidesForm'

export default function Rides() {
    return (
    <div>
        <Head>
        <title>Rides Next App</title>
        <meta
        name="description"
        content="Meta description for the Rides page"
        />
        <link rel="icon" href="/images/editflight-icon.png" />
        
        </Head>
        <main> 
            <div>
                <SearchRidesForm/>
            </div>
        </main>
    </div>
    )
}
