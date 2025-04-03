import React, { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import { ModularAgent, randRange } from '../../classes'
import ServiceVignette from './service-vignette'

export default function ModularSaas() {

    //* Canvas state, calculate width using bounds.
    const [ref, bounds] = useMeasure()
    const [width] = useState(bounds.width > 0 ? bounds.width : 2000)
    const [height] = useState(700)

    const agents: ModularAgent[] = []

    //* Number of iterations equals number of dots on screen.
    for (let i = 0; i < 60; i++) {
        const x = randRange(0, width)
        const y = randRange(0, height)
        agents.push(new ModularAgent(x, y))
    }

    useEffect(() => {
        const canvas = document.getElementById('modular') as HTMLCanvasElement
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        const render = () => {
            ctx.clearRect(0, 0, width, height)

            for (let i = 0; i < agents.length; i++) {
                const agent = agents[i]

                for (let j = i + 1; j < agents.length; j++) {
                    const other = agents[j]
                    const dist = agent.pos.getDistance(other.pos)

                    //* Number indicates the max distance between two points to hold a line between them.
                    if (dist > 300) continue

                    ctx.lineWidth = 1 - dist / 200
                    ctx.beginPath()
                    ctx.moveTo(agent.pos.x, agent.pos.y)
                    ctx.lineTo(other.pos.x, other.pos.y)
                    ctx.stroke()
                    ctx.strokeStyle = '#6366F1'
                }
            }

            agents.forEach(agent => {
                agent.update()
                agent.draw(ctx)
                agent.bounce(width, height)
            })
        }

        const loop = () => {
            render()
            requestAnimationFrame(loop)
        }
        loop()
        return () => ctx.clearRect(0, 0, width, height)
    })

    return (
        <div className='absolute top-0 left-0 w-full' ref={ref}>
            <ServiceVignette />
            <canvas className='w-full h-full opacity-80' width={bounds.width + 190} height={700} id='modular'></canvas>
        </div>
    )
}
