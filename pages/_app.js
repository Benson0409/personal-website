// pages/_app.js
import '../styles/globals.css';
import I18nWrapper from '../components/I18nWrapper'; // <-- 引入新的 Wrapper

function App({ Component, pageProps }) {
  return (
    // 使用 I18nWrapper 包裹應用程式
    <I18nWrapper>
      <Component {...pageProps} />
    </I18nWrapper>
  );
}

export default App;