export async function GET(params) {
    const email = params.url.searchParams.get('email');

    try {
        const data = JSON.stringify({
            "Messages": [{
                "From": {"Email": "nhatest001@gmail.com", "Name": "Kommune Supporter"},
                "To": [{"Email": 'dcentkim@gmail.com', "Name": email}],
                "Subject": "Drun",
                "TextPart": email
            }]
        });

        const basicAuth = btoa(`7a8d4f8a78bd5b9034c5c9bed16b7fa7:b606b3c4d722ee99324b27dd69a7f66a`);
        const res=await fetch('https://api.mailjet.com/v3.1/send', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json', 'Authorization': `Basic ${basicAuth}`
            },
        })
        return new Response(res.body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        throw error(404, {
            message: 'Not found'
        });
    }
}