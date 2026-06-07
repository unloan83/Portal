import StockTickerCard from './components/StockTickerCard';

export default function DashboardHome() {
  // Add whatever stock tickers you want to track dynamically right here
  const targetWatchlist = ['RELIANCE', 'TCS', 'INFY', 'AAPL'];

  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 pb-6 border-b border-zinc-800 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              OpenStock <span className="text-sm font-normal text-zinc-500 px-2 border border-zinc-800 rounded ml-2">Custom Replica</span>
            </h1>
            <p className="text-sm text-zinc-400 mt-1">Real-time asset validation and cross-provider terminal matrix.</p>
          </div>
        </header>

        <section>
          <h2 className="text-lg font-bold text-zinc-400 mb-4 tracking-wide uppercase text-xs">Active Workspace Monitor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetWatchlist.map((ticker) => (
              <StockTickerCard key={ticker} ticker={ticker} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
