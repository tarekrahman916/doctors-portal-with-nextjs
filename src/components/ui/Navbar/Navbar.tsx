"use client";

import React from "react";
import { Layout, Menu, Typography } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Header, Content } = Layout;
const { Title } = Typography;

const Navbar = ({
  items,
}: {
  items: {
    key: string;
    label: string;
    href: string;
  }[];
}) => {
  const pathName = usePathname();
  return (
    <Layout className="layout">
      <Header className="flex items-center">
        <Content>
          <Link href="/">
            <Title level={3} className="text-white mb-0">
              Doctors Portal
            </Title>
          </Link>
        </Content>
        <Menu
          disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[items.find((item) => item.href === pathName)?.key!]}
        >
          {items?.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
