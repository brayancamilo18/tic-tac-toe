import { Square } from "./Square";
export function WinnerModal ({winner, resetGame}) {
    if (winner == null) return null;

    const winnerText = winner ? `Ganó: ${winner}` : "Empate";

    return(
        <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>
          <header className="win">{winner && <Square>{winner}</Square>}</header>
          <footer>
            <button onClick={resetGame}>Empazar de nuevo</button>
          </footer>          
        </div>
      </section>
    )
}