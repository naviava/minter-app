# MintSaga - Blockchain-Powered NFT Image Storage

MintSaga is an application that leverages blockchain technology to store images as Non-Fungible Tokens (NFTs) related to historical events. Users can enjoy the benefits of immutable title and description storage, ensuring the preservation of historical content on the blockchain. You can find a live demo of the app [here](https://mintsaga.vercel.app/).

Here is a short video demonstrating the app's key features:

<iframe width="560" height="315" src="https://www.youtube.com/embed/_5HMEXtB4iI?si=1-GHZwsMH8EdJsJC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Below are the key features and functionalities of MintSaga:

## Features

### 1. Authentication and Wallet Linking

- **User Sign-In:** Users are required to sign in to MintSaga to access its features.

- **Wallet Integration:** Users can link their wallets to the app, enabling them to upload NFTs to the blockchain.

- **Single OAuth Account, Multiple Wallets:** Each OAuth account can be linked to multiple wallets, but only one wallet can be active at a time. Each wallet can be linked to only one OAuth account.

- **Switchable Wallets:** Users can seamlessly switch between linked wallets by disconnecting the current active wallet and connecting to an alternate one.

### 2. Ownership and Visibility

- **Upload Restrictions:** Uploading to the blockchain is only possible when a wallet is linked.

- **Public Visibility Toggle:** Users can control the public visibility of their owned NFTs, deciding whether to showcase them publicly or keep them private.

### 3. Favorites and Community Engagement

- **Favorites Page:** Users can mark NFTs as favorites. These NFTs are displayed on the Favorites page for easy access.

- **Comment Section:** Each NFT page includes a comment section to encourage community engagement.

- **Comment Management:** Comment authors have the ability to delete their own comments, providing control over the discussions.

### 4. Social Media Integration

- **Token Sharing:** Users can easily share the token link on various social media platforms, including WhatsApp, Facebook, X (Twitter), LinkedIn, and Reddit directly from the UI.

### 5. User Experience Enhancements

- **Dark Mode:** The app offers a dark mode for a more comfortable viewing experience.

- **Theme Switching:** Users can easily switch between themes through the app's user interface, tailoring their experience to their preferences.

### 6. Progressive Web App (PWA) Enabled

- **Easy Access:** MintSaga is PWA-enabled, allowing users to visit the site once and save it on their devices. This enables access without opening a web browser, with no hassle of app updates.

  _Note: Ensure that your device supports PWA functionality for the best user experience._

## Getting Started

To get started with MintSaga, follow these steps:

1. **Sign Up/Login:** Log in using one of the available OAuth methods to access MintSaga's features.

2. **Link Wallet:** Connect your preferred wallet to upload NFTs to the blockchain.

3. **Explore and Engage:** Browse historical NFTs, mark favorites, and engage with the community through comments.

4. **Customize Visibility:** Choose whether to make your owned NFTs publicly visible or keep them private.

5. **Share Tokens:** Share your favorite tokens on social media directly from the MintSaga UI.

6. **Enhance Experience:** Customize your user experience with dark mode and theme switching options.

## Setting Up Development Environment

### Prerequisites

Before you begin, ensure that you have Docker installed on your machine. If not, [install Docker](https://docs.docker.com/get-docker/) and run the following command:

```
docker run -d --name mintsaga-container -e POSTGRES_DB=mintsaga-db -e POSTGRES_PASSWORD=Password123 -e POSTGRES_USER=dbadmin -p 6500:5432 postgres
```

Once the above steps are completed, make sure the container is powered on. If not, you can manually power it on. If you encounter any issues, refer to the [Docker documentation](https://docs.docker.com/).

### Environment Setup

**1. Clone the Repository and Navigate to the Directory**

```
git clone https://github.com/naviava/minter-app.git
cd minter-app
```

**2. Install Dependencies and Push Database Schema**

```
npm install
npx prisma db push
```

**3. Configure Environment Variables**

Rename (or make a copy and rename) the `.env.example` file to `.env`. In the `.env` file, enter actual values from your account, replacing placeholder values to enable OAuth.

_Note: Google OAuth is disabled by default, due to an issue I faced with my Google account. You can enable it by following these steps:_

- _Uncomment the commented lines in this file: `/app/api/auth/[...nextauth]/route.ts`_
- _Uncomment the commented lines in this file: `/components/modals/auth-modal.tsx`_

**4. Run the Development Environment**

You are now ready to run the development environment:

```
npm run dev
```

This will start the development server, and you can access the app at `http://localhost:3000`. Feel free to optimize and customize the development environment based on your preferences.
