# Inference Lab Web

Interactive web interface for the [Inference Lab](https://github.com/doubleword/inference-lab) LLM inference simulator. Visualize and analyze LLM serving performance in real-time.

## Features

- **Interactive Configuration**: Edit simulation parameters in a visual editor
- **Real-time Visualization**: Watch simulations run with live charts
- **Performance Metrics**: View TTFT, E2E latency, throughput, and utilization
- **Time Series Charts**: Track metrics over simulation time
- **Latency Distribution**: Visualize P50, P90, P95, P99 percentiles
- **Export Results**: Download simulation data and configurations

## Quick Start

### Development

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Production Build

```bash
npm run build
npm run preview
```

The production build will be in the `dist/` directory.

## Dependencies

This project depends on the `@doubleword/inference-lab` package, which provides the WebAssembly simulator core.

```json
{
  "dependencies": {
    "@doubleword/inference-lab": "^0.1.0"
  }
}
```

## Usage

1. **Load or Edit Configuration**: Use the built-in editor to customize hardware, model, scheduler, and workload settings
2. **Run Simulation**: Click "Run Simulation" and watch real-time progress
3. **Adjust Speed**: Use the speed slider (1x, 10x, 100x, MAX)
4. **View Results**: Explore charts showing latency, throughput, and utilization
5. **Export Data**: Download results for further analysis

## Technology Stack

- **React 19**: UI framework
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Chart.js**: Interactive charts and visualizations
- **WebAssembly**: High-performance simulation engine

## Project Structure

```
inference-lab-web/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── simulator.worker.ts     # Web Worker for background simulation
│   ├── App.css                 # Styles
│   └── main.tsx                # Entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
└── package.json                # Dependencies and scripts
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Browser Requirements

This application uses WebAssembly and requires a modern browser with:
- WebAssembly support
- ES2020+ features
- Web Workers

Tested on Chrome, Firefox, Safari, and Edge.

## Related Projects

- [Inference Lab](https://github.com/doubleword/inference-lab) - Core simulator (Rust/WASM)

## License

MIT

## Repository

https://github.com/doubleword/inference-lab-web
