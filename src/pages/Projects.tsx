import React from 'react'

interface Props {

}

const Projects = (props: Props) => {
    return (
        <div className="projects">
            <h1>{'<My projects/>'}</h1>
            <div className="row">
                <div className="row__content">
                    <h3>Tic Tac Toe</h3>
                    <hr></hr>
                    <p>
                        <a href="https://en.wikipedia.org/wiki/Tic-tac-toe">Tic-tac-toe</a>, noughts and crosses, or Xs and Os,
                        is a paper-and-pencil game for two players, X and O, who take turns
                        marking the spaces in a 3×3 grid. The player who succeeds in placing
                        three of their marks in a diagonal, horizontal, or vertical row is
                        the winner. It is a solved game with a forced draw assuming best
                        play from both players.
                    </p>
                </div>
                <iframe className="demo" src="https://egas099.github.io/tic-tac-toe/">Tic tac toe</iframe>
            </div>
            <div>There will be many others soon!</div>
        </div>
    )
}

export default Projects
