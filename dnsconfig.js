// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

var REG_NONE = NewRegistrar("none");
var DNS_BIND = NewDnsProvider("bind");

D("wack.club", REG_NONE, DnsProvider(DNS_BIND),
    A("@", "1.2.3.4"),    // "@" means the domain's apex.
);