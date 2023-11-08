import React from 'react'
import Head from 'next/head'
import SearchFlightsForm from '@/components/SearchFlightsForm'

export default function Flights() {
    return (
    <div>
        <Head>
        <title>Flights Next App</title>
        <meta
        name="description"
        content="Meta description for the Flights page"
        />
        <link rel="icon" href="/images/editflight-icon.png" />
        </Head>
        <main>
            <div>
                <SearchFlightsForm/>
            </div>
        </main>
    
        
    </div>
    )
}
