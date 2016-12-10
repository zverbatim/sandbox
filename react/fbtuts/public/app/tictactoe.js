class Square extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.index)
    }


    render() {
        return (
            <button className="square" onClick={this.onClick}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: new Array(9).fill(null),
            xIsNext: true,
            history: [{
                squares: new Array(9).fill(null)
            }]
        };
        this.onClick = this.onClick.bind(this);
    }

    render() {
        let i = 0;
        return (
            <div>
                <div className="board-row">
                    <Square index={i} value={current.squares[i++]} onClick={this.onClick}/>
                    <Square index={i} value={current.squares[i++]} onClick={this.onClick}/>
                    <Square index={i} value={current.squares[i++]} onClick={this.onClick}/>
                </div>
                <div className="board-row">
                    <Square index={i} value={current.squares[i++]} onClick={this.onClick}/>
                    <Square index={i} value={current.squares[i++]} onClick={this.onClick}/>
                    <Square index={i} value={current.squares[i++]} onClick={this.onClick}/>
                </div>
                <div className="board-row">
                    <Square index={i} value={current.squares[i++]} onClick={this.onClick}/>
                    <Square index={i} value={current.squares[i++]} onClick={this.onClick}/>
                    <Square index={i} value={current.squares[i++]} onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    onClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !this.state.xIsNext
        });

        //const squares = this.state.squares.slice();
        //if (calculateWinner(squares) || squares[i]) {
        //    return;
        //}
        //squares[i] = this.state.xIsNext ? 'X' : 'O';
        //this.setState((prev)=> ({
        //    squares: squares,
        //    xIsNext: !prev.xIsNext
        //}));
    }


    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares}/>
                </div>
                <div className="game-info">
                    <div className="status">{status} </div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

var mountNode = document.getElementById('content');
ReactDOM.render(<Game/>, mountNode);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

