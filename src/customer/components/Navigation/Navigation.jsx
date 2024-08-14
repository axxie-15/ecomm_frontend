import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Avatar from '@mui/material/Avatar';
import SignIn from '../SignIn/SignIn'; // Ensure this path is correct

const navigation = {
  categories: [
    {
      id: 'bedding',
      name: 'Bedding',
      featured: [
        {
          name: 'Premium Sheets',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Premium bedsheets displayed on a modern bed.',
        },
        {
          name: 'Silk Pillowcases',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          imageAlt: 'Close-up of silk pillowcases in various colors.',
        },
      ],
      sections: [
        {
          id: 'sheets',
          name: 'Sheets',
          items: [
            { name: 'Cotton Sheets', href: '#' },
            { name: 'Silk Sheets', href: '#' },
            { name: 'Linen Sheets', href: '#' },
            { name: 'Satin Sheets', href: '#' },
          ],
        },
        {
          id: 'bedding-sets',
          name: 'Bedding Sets',
          items: [
            { name: 'Classic Sets', href: '#' },
            { name: 'Luxury Sets', href: '#' },
            { name: 'Eco-Friendly Sets', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Pillowcases', href: '#' },
            { name: 'Bed Skirts', href: '#' },
            { name: 'Mattress Protectors', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ],
};

export default function Example() {
  const [open, setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false); // State for showing sign-in form

  return (
    <div className="bg-gray-50">
      {/* Mobile menu */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            {/* Links */}
            <Tab.Group as="div" className="mt-2">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className={({ selected }) =>
                        selected
                          ? 'border-b-2 border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-900 hover:text-gray-700'
                      }
                    >
                      {category.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                {navigation.categories.map((category) => (
                  <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img
                              src={item.imageSrc}
                              alt={item.imageAlt}
                              className="object-cover object-center"
                            />
                          </div>
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1 text-gray-500">Shop now</p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" onClick={() => setSignInOpen(true)} className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <Avatar alt="User Profile" src="https://www.gravatar.com/avatar/00000000000000000000000000000000" className="h-5 w-5 flex-shrink-0" />
                <span className="ml-3 block text-base font-medium text-gray-900">Profile</span>
                <span className="sr-only">, view profile</span>
              </a>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Sign in Dialog */}
      <Dialog open={signInOpen} onClose={() => setSignInOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-sm w-full bg-white p-6 rounded shadow-lg">
            <button
              type="button"
              onClick={() => setSignInOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <SignIn />
          </Dialog.Panel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white">
          Free shipping on orders over $50
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Open menu</span>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Company Logo"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-50">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <Popover.Button className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 hover:border-indigo-600 hover:text-indigo-600">
                        {category.name}
                      </Popover.Button>
                      <Popover.Panel className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto text-sm text-gray-500">
  {/* Mega menu */}
  <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

  <div className="relative bg-white">
    <div className="mx-auto max-w-7xl px-8 py-16">
      <div className="grid grid-cols-2 gap-x-8">
        {/* First Column: Sections */}
        <div className="space-y-8">
          {category.sections.map((section) => (
            <div key={section.name}>
              <p id={`${category.id}-${section.id}-heading`} className="text-lg font-semibold text-gray-900">
                {section.name}
              </p>
              <ul
                role="list"
                aria-labelledby={`${category.id}-${section.id}-heading`}
                className="mt-4 space-y-4"
              >
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="block p-2 text-gray-700 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Second Column: Featured Items */}
        <div className="space-y-8">
          {category.featured.map((item) => (
            <div key={item.name} className="group relative flex items-start space-x-4 p-2 border border-gray-200 bg-gray-50 rounded-lg transition-transform transform hover:scale-105">
              <div className="flex-shrink-0 w-24 h-16 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="flex-1">
                <a href={item.href} className="block font-medium text-gray-900">
                  {item.name}
                </a>
                <p aria-hidden="true" className="mt-1 text-gray-600">Shop now</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</Popover.Panel>



                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a key={page.name} href={page.href} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" onClick={() => setSignInOpen(true)} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="text-gray-700 hover:text-gray-800 flex items-center space-x-2">
                    <Avatar alt="User Profile" src="https://www.gravatar.com/avatar/00000000000000000000000000000000" />
                    <span className="text-sm font-medium">Profile</span>
                  </a>
                </div>

                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                    <span className="ml-2 text-sm font-medium text-gray-700">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
