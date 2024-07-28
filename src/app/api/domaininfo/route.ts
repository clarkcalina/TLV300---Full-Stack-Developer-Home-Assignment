import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { domain, type } = body;

  if (!domain || !type) {
    return NextResponse.json({ error: 'Domain and type are required' }, { status: 400 });
  }

  try {
    const response = await axios.get('https://www.whoisxmlapi.com/whoisserver/WhoisService', {
      params: {
        domainName: domain,
        apiKey: process.env.NEXT_PUBLIC_WHOIS_API_KEY,
        outputFormat: 'JSON',
      },
    });

    const data = response.data.WhoisRecord;

    if (type === 'domain') {
      const domainInfo = {
        domainName: data.domainName,
        registrarName: data.registrarName,
        registrationDate: data.createdDate,
        expirationDate: data.expiresDate,
        estimatedDomainAge: data.estimatedDomainAge,
        hostnames: data.nameServers?.hostNames.join(', ').substring(0, 25),
      };
      return NextResponse.json(domainInfo, { status: 200 });
    } else if (type === 'contact') {
      const contactInfo = {
        registrantName: data.registrant?.organization,
        technicalContactName: data.technicalContact?.organization,
        administrativeContactName: data.administrativeContact?.organization,
        contactEmail: data.contactEmail,
      };
      return NextResponse.json(contactInfo, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Invalid request type' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch domain information' }, { status: 500 });
  }
}
