import React from "react"

const Blogs = () => {
  return (
    <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="">
        <div>
          <h1 className="text-6xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500 text-center cursor-pointer">
            Basic Questions
          </h1>
          <p className="mt-10 mb-3 font-semibold text-2xl text-cyan-600">
            🙋.What Is the Difference Between Authentication and Authorization?
          </p>
          <div className="my-14 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-600">
                <tr>
                  <th scope="col" className="px-6 text-center py-3">
                    Authentication
                  </th>
                  <th scope="col" className="px-6 text-center py-3">
                    Authorization
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b dark:bg-gray-100 dark:border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    1.The user is verified by the authentication.
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                    1. Which resources a user can access determines the
                    authorization.
                  </td>
                </tr>
                <tr className="border-b dark:bg-gray-100 dark:border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    2.Authentication is mainly done through passwords, one-time
                    <br />
                    pins, biometric information, and other information provided
                    or entered by the user.
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                    2.Authorization mainly works through settings that are
                    <br />
                    implemented and maintained by the organization or the user.
                  </td>
                </tr>
                <tr className="border-b dark:bg-gray-100 dark:border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    3.The first step of authentication is to establish a good
                    <br />
                    identity and access management process.
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                    3.Authorization always takes place after authentication.
                  </td>
                </tr>
                <tr className="border-b dark:bg-gray-100 dark:border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    4.It is visible to and partially changeable by the user.
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                    4.It isn’t visible to or changeable by the user.
                  </td>
                </tr>
                <tr className="border-b dark:bg-gray-100 dark:border-gray-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    5.It is important for the log in,sign in ,register part.
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                    5.It is important for the access the which part er protected
                    that.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-16">
          <p className="mt-10 mb-3 font-semibold text-2xl text-cyan-600">
            🙋.Why Firebase is Used?
          </p>
          <p className="text-gray-600">
            Firebase is a backend-as-a-service platform by Google that provides
            functionalities and helps with the back-end development of your
            Android, iOS, or web app and also Some products that support
            Unity3D. Firebase functionalities are Firebase Database, Firebase
            Cloud Storage, Firebase Cloud Messaging, and Firebase Remote Config.
            Firebase helps apps grow to the next level. Firebase has all the
            features and it is the best part. Firebase Remote Configuration
            actually saved me sometimes from going into broken. The Firebase
            Database stores data as JSON and is synchronized in real-time.
            Firebase Authentication has saved countless hours of my life since
            it allows you to Obtain user authentication for your app. Firebase
            Analytics is a product that I think every scale, type, and kind of
            developer must use. It gives an in-depth view of a product. and
            helps develop marketing strategies. Firebase Remote Config basically
            stores the key values in the Firebase Console and then retrieves
            them in the app. We can call Firebase Database: "super amazing!" It
            provides two types of databases: real-time and cloud, both of which
            are real-time-savers. Firebase Cloud Messaging is also a convenient
            and useful product. Firebase Authentication can help you implement
            the features that a newbie can dream of, like doing email
            verification, and letting users sign in/sign up.
          </p>
          </div>
          <div className="my-16">
          <p className="mt-10 mb-3 text-2xl font-semibold text-cyan-600">
            🙋.what other options do you have to implement authentication?
          </p>

          <p className="text-gray-600">
            Other authentication methods are Cookie-Based authentication,
            Token-Based authentication, Third-party Access (OAuth, API-token),
            OpenId, and SAML.
            <span className="text-blue-500 cursor-pointer">
              Cookie based authentication{" "}
            </span>
            It is the default method for handling user authentication for a long
            log-in and log-out time. log-in credentials for the server. The
            server verifies the credentials and creates a session id, which is
            stored on the server. Then, via a set cookie request, the clint in
            that time, the session id from the cookie is verified by the server
            and the request gets processed. Then the logout session id will be
            cleared from both the client cookie and the server.
            <span className="text-blue-500 cursor-pointer">
              Token based authentication{" "}
            </span>
            is very popular because of the rise in single-page applications and
            the statelessness of the application. We primarily concentrate on
            JSON Web Token, which is on receiving the credentials from the
            client, the server validates the credentials and generates a signed
            JWT which contains the user information. It will never be stored on
            the server. Each subsequent request will be passed to the server and
            verified by the server. It can be maintained on the client side in
            local storage, session storage or even in cookies.
            <span className="text-blue-500 cursor-pointer ">
              Third-party access, Open Authentication, OpenId, and SAML{" "}
            </span>
            are the others.
          </p>
          </div>
          <p className="mt-10 mb-3 text-2xl font-semibold text-cyan-600">
            🙋.what other service does firebase provide other then
            authentication?
          </p>
          <p className="text-gray-600">
            Other than authentication, Firebase provides others The most useful
            of them are:
            <span className="text-blue-500 cursor-pointer">
              Cloud Firestore,Cloud Functions,Hosting,Cloud Storage,Google
              Analytics,Predictions,Cloud Messaging,Dynamic Links,Remote Config.
            </span>
            <span className="text-blue-500 cursor-pointer">Cloud Messaging</span> implements notifications irrespective of the
            platform because it is fast, reliable, and scalable to handle your
            requests. Moreover, you won’t be charged a penny for using this
            service as it’s free of charge.<span className="text-blue-500 cursor-pointer">Dynamic Links</span> is mostly used to
            generate deep links that redirect user traffic to landing pages,
            websites, or mobile applications. It also provides custom domain
            names. And if we use our own domain name, this service can be
            integrated with that as well.<span className="text-blue-500 cursor-pointer">Predictions</span> helps us make predictions
            about our product decisions. This service is important to increase
            our business and revenue. Without having any machine learning
            experience, we can use this service easily to divide the users into
            different fragments and make decisions based on their
            behavior.<span className="text-blue-500 cursor-pointer">Google Analytics</span> provides visualization of all the
            information with just a single tap. Many of them might be familiar
            with this service, as it is widely used in web applications as well.
            This is free too.<span className="text-blue-500 cursor-pointer">Remote Config</span> helps in remotely changing our
            application UI and content, without publishing it again.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Blogs
