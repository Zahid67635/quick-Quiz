import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='p-6'>
                <h2 className='text-3xl'>
                    Q-1) What is the purpose of react router?

                </h2>
                <p>
                    <b>Ans:</b><br />
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                </p><br />
                <h2 className='text-3xl'>
                    Q-2) How does context api works?
                </h2>
                <p>
                    <b>Ans:</b><br />
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p><br />
                <h2 className='text-3xl'>
                    Q-3) What is usehref ?
                </h2>
                <p>
                    <b>Ans:</b><br />
                    It is a react router hook. The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.
                </p>
            </div>
        </div>
    );
};

export default Blog;