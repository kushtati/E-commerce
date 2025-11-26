import { Router, Request, Response } from 'express'
import prisma from '../config/database'

const router = Router()

// Get all orders (simplified - should have auth)
router.get('/', async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
    res.json(orders)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' })
  }
})

// Get single order
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const order = await prisma.order.findUnique({
      where: { id: parseInt(id) },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    })
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' })
    }
    
    res.json(order)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order' })
  }
})

// Create order
router.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, items, shippingAddress, customerEmail, customerName, totalAmount } = req.body
    
    const order = await prisma.order.create({
      data: {
        userId,
        shippingAddress,
        customerEmail,
        customerName,
        totalAmount: parseFloat(totalAmount),
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        }
      },
      include: {
        items: true
      }
    })
    
    res.status(201).json(order)
  } catch (error) {
    console.error('Order creation error:', error)
    res.status(500).json({ error: 'Failed to create order' })
  }
})

// Update order status
router.patch('/:id/status', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { status } = req.body
    
    const order = await prisma.order.update({
      where: { id: parseInt(id) },
      data: { status }
    })
    
    res.json(order)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order status' })
  }
})

export default router
