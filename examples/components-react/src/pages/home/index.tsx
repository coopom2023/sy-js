import { routes } from '../../router/routes'

function Home() {
  return (
    <div>
      <h1>components-react</h1>
      <ul>
        {routes.map(route => {
          if (!route.children) {
            return (
              <li key={route.path}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={route.path}
                >
                  { route.meta?.displayName}
                </a>
              </li>
            )
          }
          return (
            <li key={route.path}>
              <span v-if="route.children">{ route.meta?.displayName }</span>
              <ul>
                {route.children.map(item => (
                  <li key={item.path}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={route.path + '/' + item.path}
                    >
                      { item.meta?.displayName}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home
