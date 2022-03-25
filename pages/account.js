import { useSession, signIn, signOut } from 'next-auth/react';
export default function Account() {
	const { data: session } = useSession();

	return (
		<div>
			{session && (
				<div>
					<p>{session?.user?.name}</p>
					<img src={session.user.image} alt="" />
					<div>
						<button onClick={signOut}>Sign Out</button>
					</div>
				</div>
			)}
			{!session && <button onClick={signIn}>Sign In</button>}
		</div>
	);
}
