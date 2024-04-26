import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "@/components/ui/tailwindcss-indicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "J&B Marketplace",
	description: "El mejor lugar para comprar y vender productos de segunda mano"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<NavBar />
					{children}
					<Footer />
					<TailwindIndicator />
				</ThemeProvider>
			</body>
		</html>
	);
}
