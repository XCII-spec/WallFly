export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST allowed" });
    }

    const webhookURL = "https://discord.com/api/webhooks/1507740578215891004/kSldgnmZKBw4xiVkpDDfiktxjxvlGwrwUcKDiTzuV5BmmKFClvQwqJ9MMS8eRvCBO-Oo";

    try {
        await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        return res.status(200).json({ success: true });

    } catch (err) {
        return res.status(500).json({ error: "Webhook failed" });
    }
}
