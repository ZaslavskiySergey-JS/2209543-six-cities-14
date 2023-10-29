import MainPages from '../../Pages/main-page/main-page';

type AppOfferProps = {
  offerCounts: number;
}

function App({offerCounts}: AppOfferProps): JSX.Element {
  return (
    <MainPages offerCounts={offerCounts} />
  );
}

export default App;
