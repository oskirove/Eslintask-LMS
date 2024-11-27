import React from 'react'
import HeaderDashboard from '../dashboard/_components/HeaderDashboard'
import Board from './_components/Board'

export default function Schedule() {
    return (
        <main>
            <div className="m-3 px-2">
                <HeaderDashboard />
                <Board />
            </div>
        </main>
    )
}
