// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

var REG_NONE = NewRegistrar("none");
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare");

D("wack.club", REG_NONE, DnsProvider(DSP_CLOUDFLARE),
    A("@", "1.2.3.4"),    // "@" means the domain's apex.
);