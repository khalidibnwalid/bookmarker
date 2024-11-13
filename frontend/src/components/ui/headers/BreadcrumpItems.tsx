import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../breadcrumb"

interface props {
    items: ({ link: string, label: string } | string)[]
}

export default function BreadcrumpItems({ items }: props) {

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, i) =>
                    <BreadcrumbItem key={"breadcrumb"}>
                        {typeof item === 'string'
                            ? <BreadcrumbPage>{item}</BreadcrumbPage>
                            : <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
                        }
                        {i < items.length - 1 && <BreadcrumbSeparator />}
                    </BreadcrumbItem>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    )
}