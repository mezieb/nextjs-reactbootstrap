import React from 'react'
import Head from 'next/head'
import SearchHotelsForm from '@/components/SearchHotelsForm'

export default function Hotels() {
    return (
    <div>
        <Head>
        <title>Hotels Next App</title>
        <meta
        name="description"
        content="Meta description for the Hotels page"
        />
        <link rel="icon" href="/images/editflight-icon.png" />
        </Head>
        <main >
            <div className="mt-5">
                <SearchHotelsForm/>
            </div>
        </main>
    </div>
    )
}
